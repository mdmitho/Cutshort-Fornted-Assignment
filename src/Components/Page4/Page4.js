import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../img/Logo-icon.png";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Page4 = () => {
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
                  <li class="step step-primary"></li>
                  <li class="step step-primary"></li>
                  <li class="step step-primary"></li>
                </ul>
              </div>
              {/* steps end */}

              {/* circle logo start */}
              <div className="">
                <FontAwesomeIcon
                  className="m-2 h-16 w-16 text-primary"
                  icon={faCircleCheck}
                ></FontAwesomeIcon>
              </div>
              {/* circle logo end */}

              {/* congratulations start */}
              <div className="">
                <h1 className="text-2xl font-bold">Congratulations, Eren!</h1>
                <p className="mt-2 text-sm text-base-300">
                  You have completed onboarding,you can start using the Eden!
                </p>
              </div>

              <div class="card-body">
                <Link to="#">
                  <button class="btn btn-primary w-full text-white">launch Eden</button>
                </Link>
              </div>
              {/* congratulations start */}
              
            </div>
          </div>
        </div>
      </div>
    );
};

export default Page4;