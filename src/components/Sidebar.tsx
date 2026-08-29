import {
  CalendarDays,
  CircleHelp,
  Crown,
  Gamepad2,
  Home,
  Medal,
  Swords,
} from "lucide-react";

export type Page =
  | "dashboard"
  | "events"
  | "tournaments"
  | "gamenights"
  | "circuit"
  | "leaderboard"
  | "faq";

type SidebarProps = {
  page: Page;
  setPage: (page: Page) => void;
};

const navigation = [
  {
    id: "dashboard" as Page,
    label: "Dashboard",
    icon: Home,
  },
  {
    id: "events" as Page,
    label: "Events",
    icon: CalendarDays,
  },
  {
    id: "tournaments" as Page,
    label: "Tournaments",
    icon: Swords,
  },
  {
    id: "gamenights" as Page,
    label: "Gamenights",
    icon: Gamepad2,
  },
  {
    id: "circuit" as Page,
    label: "Circuit",
    icon: Crown,
  },
  {
    id: "leaderboard" as Page,
    label: "Leaderboard",
    icon: Medal,
  },
  {
    id: "faq" as Page,
    label: "FAQ",
    icon: CircleHelp,
  },
];

export default function Sidebar({
  page,
  setPage,
}: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-main">
          COBBLEASIA
        </div>

        <div className="brand-sub">
          EVENTS
        </div>

        <div className="brand-sub muted">
          & TOURNAMENTS
        </div>
      </div>

      <div className="nav-label">
        EXPLORE
      </div>

      <nav className="navigation">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              className={`nav-item ${
                page === item.id
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setPage(item.id)
              }
            >
              <Icon size={17} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="server-status">
          <span className="status-dot" />
          <div>
            <small>COBBLEASIA</small>
            <strong>SERVER ONLINE</strong>
          </div>
        </div>

        <div className="sidebar-version">
          SEASON 2
        </div>
      </div>
    </aside>
  );
}