import { Copy, ExternalLink } from "lucide-react";

const SERVER_IP = "play.cobbleasia.com";

const DISCORD_URL =
  "https://discord.gg/qB3ExYsUAH";

export default function Header() {
  async function copyIP() {
    try {
      await navigator.clipboard.writeText(
        SERVER_IP
      );
    } catch {
      // Clipboard may be unavailable.
    }
  }

  return (
    <header className="top-header">
      <div>
        <div className="header-eyebrow">
          COBBLEASIA / SEASON 2
        </div>

        <h1>
          EVENTS & TOURNAMENTS
        </h1>
      </div>

      <div className="header-actions">
        <button
          className="server-ip"
          onClick={copyIP}
          title="Copy server IP"
        >
          <span>SERVER IP</span>

          <strong>
            {SERVER_IP}
          </strong>

          <Copy size={15} />
        </button>

        <a
          href={DISCORD_URL}
          target="_blank"
          rel="noreferrer"
          className="discord-button"
        >
          DISCORD
          <ExternalLink size={15} />
        </a>
      </div>
    </header>
  );
}