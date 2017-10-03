using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Dartagnan.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Target()
        {
            return View();
        }

        public IActionResult DartsOnBoard()
        {
            return View();
        }
        public IActionResult ScoreBoard()
        {
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
