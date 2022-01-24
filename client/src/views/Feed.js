import { IoTimerOutline } from "react-icons/io5";

const Feed = () => {
  return (
    <div className="min-h-screen py-10">
      <div className="border w-1/2 mx-auto p-8 bg-white">
        <div className="flex justify-between">
          <div className="flex">
            <div class="avatar mr-5">
              <div class="mb-8 rounded-full w-16 h-16">
                <img src="http://daisyui.com/tailwind-css-component-profile-1@56w.png" />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-3xl text-base-content">Joko</h3>
              <p className="text-base-content">@jokowow</p>
            </div>
          </div>
          <div className="text-gray-600 flex">
            <IoTimerOutline className="text-xl mr-2" />
            <p>Posted 5 days ago</p>
          </div>
        </div>
        <div>
          <img
            src="https://assets.bonappetit.com/photos/60a4022a248102a01bcfa0b6/1:1/w_2560%2Cc_limit/0621-Sheet-Pan-Gnocchi.jpg"
            className="h-full w-full rounded-md"
          />
        </div>

        <div className="flex">
          <p>Liked By</p>
          <div>
            <div class="-space-x-5 avatar-group">
              <div class="avatar">
                <div class="w-10 h-10">
                  <img src="http://daisyui.com/tailwind-css-component-profile-1@40w.png" />
                </div>
              </div>
              <div class="avatar">
                <div class="w-10 h-10">
                  <img src="http://daisyui.com/tailwind-css-component-profile-2@40w.png" />
                </div>
              </div>
              <div class="avatar">
                <div class="w-10 h-10">
                  <img src="http://daisyui.com/tailwind-css-component-profile-3@40w.png" />
                </div>
              </div>
              <div class="avatar">
                <div class="w-10 h-10">
                  <img src="http://daisyui.com/tailwind-css-component-profile-5@40w.png" />
                </div>
              </div>
              <div class="avatar placeholder">
                <div class="w-10 h-10 rounded-full bg-neutral-focus text-neutral-content">
                  <span>+99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
