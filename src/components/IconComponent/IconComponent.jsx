
import '../IconComponent/iconComponent.css'

// eslint-disable-next-line react/prop-types
export default function IconComponent({fill, icon}) {
  return (
    <a href="/" className="iconDiv position-relative">
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width="43"
      height="41"
      viewBox="0 0 43 41"
      fill={fill}
    >
      <path
        d="M5.11695 8.36244L21.3442 0.547817L37.5714 8.36244L41.5792 25.9217L30.3496 40.0032H12.3387L1.10915 25.9217L5.11695 8.36244Z"
        stroke="white"
      />
      
    </svg>
    <span className="icon position-absolute">
    {icon}
    </span>
    
    </a>
  );
}
