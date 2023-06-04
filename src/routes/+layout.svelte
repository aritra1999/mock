<script>
  import "../app.css";
  
	import Navbar from "$lib/components/Navbar.svelte";
	import RouteList from "$lib/components/RouteList.svelte";
</script>
  
<div class="w-screen h-screen bg-slate-100 overflow-hidden">
  <Navbar />
  <div class="flex pt-20">
    <div class="w-2/5 h-screen overflow-y-auto overflow-x-hidden">
      <div class="flex items-center mt-4 mx-4 space-x-4">
          <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>                      
              </div>
              <input type="text" id="simple-search" class="bg-white border-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Search" required>
          </div>
          <div>
              <button class="bg-white text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
                  </svg>                      
              </button>
          </div>
      </div>
      <RouteList />
    </div>
    <div class="w-3/5 h-screen overflow-y-auto overflow-x-hidden p-4">
      <slot />
    </div>
  </div>
</div>