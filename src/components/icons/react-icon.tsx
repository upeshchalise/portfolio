import * as React from "react";
import { SVGProps, forwardRef } from "react";

export const ReactIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        id="react"
        ref={ref}
        {...props}
      >
        <circle cx="12" cy="11.999" r="2.147" fill="#53C1DE"></circle>
        <path
          fill="#53C1DE"
          d="M4.514 15.801c.211.07.422.141.638.202-.07.281-.131.558-.188.844-.492 2.602-.108 4.664 1.12 5.372 1.266.731 3.394-.019 5.466-1.833.164-.145.328-.295.492-.455.206.202.422.394.637.581 2.006 1.725 3.989 2.423 5.213 1.716 1.266-.731 1.678-2.948 1.144-5.648a18.477 18.477 0 0 0-.141-.633c.15-.042.295-.089.441-.136 2.705-.895 4.664-2.344 4.664-3.83 0-1.42-1.847-2.798-4.397-3.675v-.001a24.589 24.589 0 0 0-.759-.239c.042-.173.08-.347.117-.52.577-2.794.197-5.038-1.083-5.779-1.233-.708-3.244.028-5.278 1.8-.202.173-.398.356-.586.539a14.702 14.702 0 0 0-.389-.361C9.492 1.851 7.355 1.054 6.075 1.8c-1.228.713-1.594 2.827-1.078 5.469.052.263.108.52.173.783-.3.084-.595.178-.872.277C1.795 9.196 0 10.565 0 11.981c0 1.463 1.912 2.929 4.514 3.82zm6.375 3.819a8.585 8.585 0 0 1-2.644 1.655c-.52.248-1.12.272-1.655.061-.745-.431-1.055-2.086-.633-4.313.052-.262.108-.525.173-.783 1.05.225 2.109.38 3.183.459a24.606 24.606 0 0 0 2.025 2.503c-.15.145-.3.286-.45.417l.001.001zm5.953-8.802a36.56 36.56 0 0 0-.68-1.228c-.23-.398-.469-.792-.717-1.181.755.094 1.477.22 2.152.375a20.737 20.737 0 0 1-.755 2.034zm.009 2.334c.3.68.563 1.369.792 2.077-.727.164-1.462.291-2.203.375a32.717 32.717 0 0 0 1.411-2.452zm-.542-1.166a31.495 31.495 0 0 1-2.146 3.74c-.698.052-1.425.075-2.161.075s-1.448-.023-2.137-.066a28.48 28.48 0 0 1-2.161-3.731h-.002a28.24 28.24 0 0 1 2.147-3.726 29.151 29.151 0 0 1 4.304 0c.398.591.778 1.195 1.139 1.814a32.18 32.18 0 0 1 1.017 1.894zM7.832 9.599c-.23.398-.455.805-.666 1.218a22.302 22.302 0 0 1-.75-2.043c.675-.15 1.392-.272 2.137-.366-.247.389-.491.787-.721 1.191zm-.665 3.59c.216.413.436.821.67 1.224.239.408.483.816.741 1.214a21.23 21.23 0 0 1-2.175-.352c.206-.675.464-1.373.764-2.086zm4.871 5.291a21.873 21.873 0 0 1-1.42-1.701 32.91 32.91 0 0 0 2.808-.005 19.942 19.942 0 0 1-1.388 1.706zm6.127 1.408a2.086 2.086 0 0 1-.774 1.466c-.745.431-2.334-.131-4.05-1.603a20.163 20.163 0 0 1-.595-.539 23.21 23.21 0 0 0 1.978-2.512 23.126 23.126 0 0 0 3.197-.492c.047.192.089.384.127.572a8.54 8.54 0 0 1 .117 3.108zm.407-10.856c.244.07.478.145.703.22 2.184.75 3.717 1.866 3.717 2.719 0 .919-1.636 2.105-3.975 2.878-.131.042-.262.084-.398.122a23.84 23.84 0 0 0-1.195-2.991c.45-.956.83-1.941 1.148-2.948zM13.26 4.326c1.745-1.518 3.371-2.113 4.112-1.687.792.455 1.097 2.292.6 4.706a7.988 7.988 0 0 1-.108.469 24.1 24.1 0 0 0-3.155-.497 23.536 23.536 0 0 0-1.997-2.49c.183-.173.361-.337.548-.501zm-1.25 1.219c.492.534.956 1.096 1.387 1.677a30.883 30.883 0 0 0-2.789 0c.459-.604.933-1.166 1.402-1.677zM6.572 2.672c.788-.459 2.536.197 4.378 1.828.117.103.234.216.356.328a23.643 23.643 0 0 0-2.011 2.488 24.72 24.72 0 0 0-3.15.488c-.061-.239-.112-.483-.164-.727-.441-2.269-.15-3.979.591-4.405zM4.627 9.28c.267-.094.539-.178.811-.258a24.986 24.986 0 0 0 1.148 2.981c-.45.98-.839 1.992-1.162 3.023l-.001.001a11.205 11.205 0 0 1-.581-.183c-.998-.314-2.133-.811-2.953-1.462a2.103 2.103 0 0 1-.881-1.402c0-.858 1.481-1.955 3.619-2.7z"
        ></path>
      </svg>
    );
  }
);
