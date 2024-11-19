<script>
    import LogoGrid from '../molecules/LogoGrid.svelte'; // Desktop Version
    import MobileLogoGrid from '../molecules/MobileLogoGrid.svelte'; // Tablet/Mobile Version
  </script>
  
  <section class="py-20 bg-white">
    <div class="max-w-10xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-32">
      
      <!-- Text Content -->
      <div class="md:w-1/3 text-left mb-8 md:mb-0">
        <h2 class="text-[1.9rem] font-extrabold text-customBlack mb-6 leading-normal">
          Access Highly-Vetted Early Stage Investments
        </h2>
        <p class="text-lg font-light">
          Invest early alongside professional investors and top venture capital firms in Indonesian-related and Southeast Asian rising companies.
        </p>
      </div>
  
      <!-- Logo Grid -->
      <div class="w-full md:w-2/3 md:pl-12 md:ml-12">
        <!-- Render Desktop Slider for large screens -->
        <div class="hidden md:block">
          <LogoGrid />
        </div>
  
        <!-- Render Tablet/Mobile Logo Grid for smaller screens -->
        <div class="block md:hidden">
          <MobileLogoGrid />
        </div>
      </div>
      
    </div>
  </section>
  
