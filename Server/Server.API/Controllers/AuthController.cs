//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;

//namespace Server.API.Controllers
//{
//    public class AuthController : Controller
//    {
//        // GET: AuthController
//        public ActionResult Index()
//        {
//            return View();
//        }

//        // GET: AuthController/Details/5
//        public ActionResult Details(int id)
//        {
//            return View();
//        }

//        // GET: AuthController/Create
//        public ActionResult Create()
//        {
//            return View();
//        }

//        // POST: AuthController/Create
//        [HttpPost]
//        [ValidateAntiForgeryToken]
//        public ActionResult Create(IFormCollection collection)
//        {
//            try
//            {
//                return RedirectToAction(nameof(Index));
//            }
//            catch
//            {
//                return View();
//            }
//        }

//        // GET: AuthController/Edit/5
//        public ActionResult Edit(int id)
//        {
//            return View();
//        }

//        // POST: AuthController/Edit/5
//        [HttpPost]
//        [ValidateAntiForgeryToken]
//        public ActionResult Edit(int id, IFormCollection collection)
//        {
//            try
//            {
//                return RedirectToAction(nameof(Index));
//            }
//            catch
//            {
//                return View();
//            }
//        }

//        // GET: AuthController/Delete/5
//        public ActionResult Delete(int id)
//        {
//            return View();
//        }

//        // POST: AuthController/Delete/5
//        [HttpPost]
//        [ValidateAntiForgeryToken]
//        public ActionResult Delete(int id, IFormCollection collection)
//        {
//            try
//            {
//                return RedirectToAction(nameof(Index));
//            }
//            catch
//            {
//                return View();
//            }
//        }
//    }
//}
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Server.API.Models;
using Server.Core.Entities;
using Server.Core.Services;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly IConfiguration _configuration;
    IUserService _userService;

    public AuthController(IConfiguration configuration,IUserService userService)
    {
        _configuration = configuration;
        _userService = userService;
    }

    [HttpPost]
    public IActionResult Login([FromBody] UserPostModel user)
    {
        var authorizedUser = _userService.VerifyUser(user.Name, user.Password);

        if (authorizedUser!=null)
        {
            var claims = new List<Claim>()
            {
                new Claim("Id",authorizedUser.Id.ToString()),
                new Claim("Name",authorizedUser.Name),
            };

            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration.GetValue<string>("JWT:Key")));
            var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
            var tokeOptions = new JwtSecurityToken(
                issuer: _configuration.GetValue<string>("JWT:Issuer"),
                audience: _configuration.GetValue<string>("JWT:Audience"),
                claims: claims,
                expires: DateTime.Now.AddMinutes(6),
                signingCredentials: signinCredentials
            );
            var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
            return Ok(new { Token = tokenString });
        }
        return Unauthorized();
    }
}
