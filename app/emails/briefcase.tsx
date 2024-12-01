//briefcase.tsx
interface BriefcaseIconProps {
    className?: string;
    width?: number;
    height?: number;
  }
  
  function BriefcaseIcon(props: BriefcaseIconProps) {
    const { className, width = 24, height = 24 } = props;
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
      </svg>
    );
  }
  export default BriefcaseIcon;

  