<!-- Add link by wrapping in an <a> tag -->
    <a href="/asset-owners-&-investors" class="rainbow-border-button">
        <span class="button-content">Become an Investor</span>
      </a>
      
      <style>
      .rainbow-border-button {
          position: relative;
          display: inline-block; /* Changed from default <a> display */
          background: transparent;
          border: none;
          padding: 12px 24px;
          border-radius: 2px; /* Match the border-radius with the pseudo-element */
          cursor: pointer;
          overflow: hidden;
          text-decoration: none; /* Remove default link underline */
      }
      
      /* Thin rainbow border (2px) */
      .rainbow-border-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: conic-gradient(
              #6950FE 0deg,
              #19D4E6 90deg,
              #FFC70F 180deg,
              #FC4DEB 270deg,
              #6950FE 360deg
          );
          border-radius: 2px; /* Match the button's border-radius */
          -webkit-mask: 
              linear-gradient(#fff 0 0) content-box,
              linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          padding: 2px; /* This controls border thickness (2px) */
      }
      
      .button-content {
          position: relative;
          color: white; /* Change this color as needed */
          font-weight: bold;
          background: transparent;
          z-index: 1;
          font-size: 1rem; /* Adjust font size as needed */
      }
      </style>