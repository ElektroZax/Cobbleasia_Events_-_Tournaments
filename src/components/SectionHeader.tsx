type Props = {
  eyebrow: string;
  title: string;
  action?: string;
  onAction?: () => void;
};

export default function SectionHeader({
  eyebrow,
  title,
  action,
  onAction,
}: Props) {
  return (
    <div className="section-header">
      <div>
        <div className="section-eyebrow">
          {eyebrow}
        </div>

        <h2>{title}</h2>
      </div>

      {action && (
        <button
          className="text-button"
          onClick={onAction}
        >
          {action} →
        </button>
      )}
    </div>
  );
}