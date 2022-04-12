import './App.css';
import profilePic from './img/profile.jpg'

function App() {
  return (
    <div class="py-8 px-8 max-w-sm mx-auto bg-sky-50 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={profilePic} alt="Profile" />
      <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg text-black font-semibold">Roy Muñoz Miranda</p>
          <p class="text-slate-500 font-medium">B54911</p>
        </div>
      </div>
    </div>
  );
}

export default App;
