import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../img/Logo-icon.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUsers} from '@fortawesome/free-solid-svg-icons'

const Page3 = () => {
    return (
      <div>
        <div class=" hero min-h-screen bg-base-100">
          <div class="hero-content ">
            <div class="card  w-3/5   bg-base-100">
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
                  <li class="step"></li>
                </ul>
              </div>
              {/* steps end */}
              <div className="">
                <h1 className="text-xl font-bold">How are you planning to use Eden?</h1>
                <p className="mt-2 text-xs text-base-300">
                  We'll streamline your setup experience accordingly.
                </p>
              </div>
              {/* from start */}
              <div class="card-body">
                <div className="flex gap-4">
                  <div className="text-left border p-6 rounded w-full">
                    <FontAwesomeIcon
                      className="m-2 h-5 text-primary"
                      icon={faUser}
                    ></FontAwesomeIcon>

                    <h1 className="text-xl font-bold ">For myself</h1>
                    <p>Write better. think more clearly.Stay organized</p>
                  </div>
                  <div className="text-left border p-6 rounded">
                    <FontAwesomeIcon
                      className="m-2 h-5 text-primary "
                      icon={faUsers}
                    ></FontAwesomeIcon>
                    <h1 className="text-xl font-bold ">With my team</h1>
                    <p>Wikis, docs, tasks & project, all in one place</p>
                  </div>
                </div>
                <div class="form-control mt-5">
                  <Link to="/page4">
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

export default Page3;