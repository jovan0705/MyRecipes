const SidebarIcon = ({ icon, text }) => {
  return (
    <div className="sidebar-icon group text-3xl">
      {icon}

      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};

export default SidebarIcon;
