import { useState } from "react";
import { LayoutGrid, Settings, FileText } from "lucide-react";
import LearnerDashboardPage from "./learner-dashboard";
import { TableDemo } from "./table";
import SettingsTab from "./setting-tab";

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface NavigationTabProps {
  item: NavItem;
  isActive: boolean;
  onClick: (id: string) => void;
}

const NavigationTab: React.FC<NavigationTabProps> = ({
  item,
  isActive,
  onClick,
}) => (
  <button
    onClick={() => onClick(item.id)}
    className={`
      flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors duration-200 cursor-pointer 
      ${
        isActive
          ? "bg-[#014273] text-white"
          : "bg-white  hover:bg-blue-200 hover:text-white"
      }
    `}
  >
    <item.icon className="w-4 h-4" />
    <span className="hidden sm:inline">{item.label}</span>
  </button>
);

const NavigationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("dashboard");

  const navItems: NavItem[] = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutGrid,
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
    },
    {
      id: "invoices",
      label: "Invoices",
      icon: FileText,
    },
  ];

  const handleTabClick = (id: string): void => {
    setActiveTab(id);
  };

  return (
    <>
      <div className="w-full bg-[#01589A] py-10 flex items-end h-30  ">
        <div className="container mx-auto  max-w-7xl  bg-white h-11">
          {" "}
          <nav className="flex bg-white   items-end ">
            {navItems.map((item) => (
              <NavigationTab
                key={item.id}
                item={item}
                isActive={activeTab === item.id}
                onClick={handleTabClick}
              />
            ))}
          </nav>
        </div>
      </div>
      {activeTab === "dashboard" && <LearnerDashboardPage />}
      {activeTab === "settings" && <SettingsTab />}
      {activeTab === "invoices" && <TableDemo />}
    </>
  );
};

export default NavigationSection;
