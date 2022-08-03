import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/Logo-icon.png'

const Page1 = () => { 
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
                  <li class="step "></li>
                  <li class="step"></li>
                  <li class="step"></li>
                </ul>
              </div>

              {/* steps end */}

              <div className="">
                <h1 className="text-2xl font-bold">Welcome! First thing first...</h1>
                <p className="mt-2 text-base-300">You can always change them later.</p>
              </div>

              {/* from start */}

              <div class="card-body">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text font-bold">Full Name</span>
                  </label>
                  <input type="text" placeholder="Steve Jobs" class="input input-bordered  " />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text font-bold">Display Name</span>
                  </label>
                  <input type="text" placeholder="Steve" class="input input-bordered " />
                  <label class="label"></label>
                </div>
                <div class="form-control mt-5">
                  <Link to="/page2">
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

export default Page1;