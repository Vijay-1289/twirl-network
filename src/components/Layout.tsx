
import { Home, User, Bell, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-secondary">
      <div className="max-w-6xl mx-auto px-4 py-8 flex gap-8">
        {/* Sidebar Navigation */}
        <nav className="w-64 fixed h-screen left-0 top-0 bg-white p-6 shadow-lg animate-slide-in">
          <div className="space-y-8">
            <h1 className="text-2xl font-bold text-primary">Twirl</h1>
            
            <div className="space-y-2">
              <Link
                to="/"
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  isActive("/")
                    ? "bg-primary text-white"
                    : "hover:bg-secondary"
                }`}
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
              </Link>
              
              <Link
                to="/profile"
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  isActive("/profile")
                    ? "bg-primary text-white"
                    : "hover:bg-secondary"
                }`}
              >
                <User className="w-5 h-5" />
                <span>Profile</span>
              </Link>
              
              <Link
                to="/notifications"
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  isActive("/notifications")
                    ? "bg-primary text-white"
                    : "hover:bg-secondary"
                }`}
              >
                <Bell className="w-5 h-5" />
                <span>Notifications</span>
              </Link>
            </div>
          </div>
          
          <button className="absolute bottom-8 left-6 flex items-center gap-3 p-3 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </nav>

        {/* Main Content */}
        <main className="ml-72 flex-1 animate-fade-in">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
