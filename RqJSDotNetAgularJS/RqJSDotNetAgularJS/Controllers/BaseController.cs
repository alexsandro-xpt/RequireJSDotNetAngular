﻿using RequireJS;

namespace RqJSDotNetAgularJS.Controllers
{
    public class BaseController : RequireJS.RequireJsController
    {
        public override void RegisterGlobalOptions()
        {
            RequireJsOptions.Add(
                "homeUrl",
                Url.Action("Index", "Home", new { area = "" }),
                RequireJsOptionsScope.Global);
        }
    }
}