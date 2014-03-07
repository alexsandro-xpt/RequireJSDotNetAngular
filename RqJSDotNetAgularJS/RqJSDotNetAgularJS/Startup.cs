using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(RqJSDotNetAgularJS.Startup))]
namespace RqJSDotNetAgularJS
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
