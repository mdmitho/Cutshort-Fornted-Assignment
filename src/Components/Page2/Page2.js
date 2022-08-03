import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../img/Logo-icon.png";

const Page2 = () => {
    return (
      <div>
        <div class=" hero min-h-screen bg-base-100">
          <div class="hero-content ">
            <div class="card  w-96   bg-base-100">
              {/* Logo and Eden start */}
              <div className="flex justify-center">
                <div className="w-12">
                  <img src={logo} alt="" />
                </div>
                <div className="">
                  <h1 className="text-xl font-bold mt-2">Eden</h1>
                </div>
              </div>
              {/* Logo and Eden end */}
              {/* steps start */}
              <div className="my-8">
                <ul class="steps">
                  <li class="step step-primary"></li>
                  <li class="step  step-primary"></li>
                  <li class="step"></li>
                  <li class="step"></li>
                </ul>
              </div>
              {/* steps end */}
              <div className="">
                <h1 className="text-xl font-bold">Let's set up a home for all your work</h1>
                <p className="mt-2 text-sm text-base-300">
                  You can always create anther workspace later.
                </p>
              </div>
              {/* from start */}
              <div class="card-body">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text font-bold">Workspace Name</span>
                  </label>
                  <input type="text" placeholder="Eden" class="input input-bordered  " />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text font-bold">
                      Workspace URL <span className="text-base-300">(optional)</span>
                    </span>
                  </label>
                  <label class="bg-accent input-group ">
                    <span>www.eden.com</span>
                    <input
                      type="text"
                      placeholder="Example"
                      class="input input-bordered h-12 rounded-none w-96"
                    />
                  </label>
                </div>
                <div class="form-control mt-5">
                  <Link to="/page3">
                    <button class="btn btn-primary w-full text-white">Create workspace</button>
                  </Link>
                </div>
              </div>
              {/* from end */}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Page2;