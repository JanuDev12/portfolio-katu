// @ts-nocheck
"use client";

import { useEffect, useRef } from "react";
import { animate, scroll, spring } from "motion";
import { ReactLenis } from "lenis/react";

import ImageDialog from "@/components/imageDialog";
import StoryboardVideo from "./StoryboardVideo";


export default function HorizontalScroll(): JSX.Element {
  const ulRef = useRef<HTMLUListElement | null>();

  useEffect(() => {
    const items = document.querySelectorAll(".items-scroll");

    if (ulRef.current) {
      const controls = animate(
        ulRef.current,
        {
          transform: ["none", `translateX(-${items.length - 1}00vw)`],
        },
        { easing: spring() }
      );
      scroll(controls, { target: document.querySelector(".wrapper-section") });
    }

    const segmentLength = 1 / items.length;
    items.forEach((item, i) => {
      const header = item.querySelector("h4");

      scroll(animate([header], { x: [1, -1] }), {
        target: document.querySelector(".wrapper-section"),
        offset: [
          [i * segmentLength, 1],
          [(i + 1) * segmentLength, 0],
        ],
      });
    });
  }, []);

  return (
    <>
      <div className="relative h-[250vh] wrapper-section">
        <ul ref={ulRef} className="flex gap-96 sticky top-44 wrapper-scroll">
          {/* ARTICLE */}
          <li className="flex  gap-4 h-full min-w-full items-center items-scroll">
            <div className="flex flex-col gap-1 w-full">
              <div className="flex flex-col gap-1">
                <h4 className="text-lg font-semibold font-proxima tracking-wide text-center">
                  Stranger
                  <span className="text-sm text-red-600"> (Thriller)</span>
                </h4>
              </div>
              <StoryboardVideo></StoryboardVideo>

              {/* <div class="flex flex-wrap gap-2 mt-4">
                <div class="w-[165px] h-auto">
                  <imageDialog src="https://static.wixstatic.com/media/a9013c_139f540942244b4baef09a4ae040f49f~mv2.png/v1/crop/x_5,y_0,w_2649,h_1800/fill/w_1198,h_814,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a9013c_139f540942244b4baef09a4ae040f49f~mv2.png" />
                </div>
                <div class="w-[165px] h-auto">
                  <img
                    src="https://static.wixstatic.com/media/a9013c_17bb052dcc2a4a808413ad28126cd0e7~mv2.png/v1/fill/w_705,h_479,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a9013c_17bb052dcc2a4a808413ad28126cd0e7~mv2.png"
                    alt=""
                  />
                </div>

                <div class="w-[165px] h-auto">
                  <img
                    src="https://static.wixstatic.com/media/a9013c_58ff36a31e874a4e86bb346f25713279~mv2.png/v1/fill/w_705,h_479,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a9013c_58ff36a31e874a4e86bb346f25713279~mv2.png"
                    alt=""
                  />
                </div>

                <div class="w-[165px] h-auto">
                  <img
                    src="https://static.wixstatic.com/media/a9013c_78c6d43dc96f433888e4f90c364e9e12~mv2.png/v1/fill/w_705,h_479,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a9013c_78c6d43dc96f433888e4f90c364e9e12~mv2.png"
                    alt=""
                  />
                </div>

                <div class="w-[165px] h-auto">
                  <img
                    src="https://static.wixstatic.com/media/a9013c_3267fc63171f4d6eac5a5c9b645def24~mv2.jpg/v1/fill/w_845,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/stranger_storyboard_1%20(2)_P%C3%A1gina_5_edite.jpg"
                    alt=""
                  />
                </div>
              </div> */}
            </div>
            {/* <div class="h-[300px]">
              <div class="w-[600px] h-full ">
                <img
                  src="https://static.wixstatic.com/media/a9013c_b9060ba4e405472288aa20acae06a838~mv2.png/v1/fill/w_479,h_241,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a9013c_b9060ba4e405472288aa20acae06a838~mv2.png"
                  class="object-contain h-full w-full"
                  alt=""
                />
              </div>
            </div> */}
          </li>
          <li className="flex gap-4 h-full min-w-full items-center items-scroll">
            <div className="flex flex-col gap-1">
              <div>
                <h4 className="text-4xl font-semibold font-proxima tracking-wide">
                  Stranger
                  <span className="text-xl text-red-600"> (Thriller)</span>
                </h4>
                <p className="tracking-wide">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Impedit deserunt praesentium atque consectetur, quis ipsa qui
                  accusantium totam temporibus mollitia tempore amet
                  necessitatibus nemo nihil quisquam maiores fuga est facilis.
                </p>
              </div>

              <div class="flex flex-wrap gap-2 mt-4">
                <div class="w-[165px] h-auto">
                  <img
                    src="https://static.wixstatic.com/media/a9013c_139f540942244b4baef09a4ae040f49f~mv2.png/v1/crop/x_5,y_0,w_2649,h_1800/fill/w_1198,h_814,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a9013c_139f540942244b4baef09a4ae040f49f~mv2.png"
                    alt=""
                  />
                </div>
                <div class="w-[165px] h-auto">
                  <img
                    src="https://static.wixstatic.com/media/a9013c_17bb052dcc2a4a808413ad28126cd0e7~mv2.png/v1/fill/w_705,h_479,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a9013c_17bb052dcc2a4a808413ad28126cd0e7~mv2.png"
                    alt=""
                  />
                </div>

                <div class="w-[165px] h-auto">
                  <img
                    src="https://static.wixstatic.com/media/a9013c_58ff36a31e874a4e86bb346f25713279~mv2.png/v1/fill/w_705,h_479,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a9013c_58ff36a31e874a4e86bb346f25713279~mv2.png"
                    alt=""
                  />
                </div>

                <div class="w-[165px] h-auto">
                  <img
                    src="https://static.wixstatic.com/media/a9013c_78c6d43dc96f433888e4f90c364e9e12~mv2.png/v1/fill/w_705,h_479,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a9013c_78c6d43dc96f433888e4f90c364e9e12~mv2.png"
                    alt=""
                  />
                </div>

                <div class="w-[165px] h-auto">
                  <img
                    src="https://static.wixstatic.com/media/a9013c_3267fc63171f4d6eac5a5c9b645def24~mv2.jpg/v1/fill/w_845,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/stranger_storyboard_1%20(2)_P%C3%A1gina_5_edite.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="h-[400px]">
              <div class="w-[600px] h-full ">
                <img
                  src="https://static.wixstatic.com/media/a9013c_b9060ba4e405472288aa20acae06a838~mv2.png/v1/fill/w_479,h_241,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a9013c_b9060ba4e405472288aa20acae06a838~mv2.png"
                  class="object-contain h-full w-full"
                  alt=""
                />
              </div>
            </div>
          </li>
          <li className="flex gap-4 h-full min-w-full items-center items-scroll">
            <div className="flex flex-col gap-1">
              <div>
                <h4 className="text-4xl font-semibold font-proxima tracking-wide">
                  Stranger
                  <span className="text-xl text-red-600"> (Thriller)</span>
                </h4>
                <p className="tracking-wide">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Impedit deserunt praesentium atque consectetur, quis ipsa qui
                  accusantium totam temporibus mollitia tempore amet
                  necessitatibus nemo nihil quisquam maiores fuga est facilis.
                </p>
              </div>

              <div class="flex flex-wrap gap-2 mt-4">
                <div class="w-[165px] h-auto">
                  <img
                    src="https://static.wixstatic.com/media/a9013c_139f540942244b4baef09a4ae040f49f~mv2.png/v1/crop/x_5,y_0,w_2649,h_1800/fill/w_1198,h_814,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a9013c_139f540942244b4baef09a4ae040f49f~mv2.png"
                    alt=""
                  />
                </div>
                <div class="w-[165px] h-auto">
                  <img
                    src="https://static.wixstatic.com/media/a9013c_17bb052dcc2a4a808413ad28126cd0e7~mv2.png/v1/fill/w_705,h_479,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a9013c_17bb052dcc2a4a808413ad28126cd0e7~mv2.png"
                    alt=""
                  />
                </div>

                <div class="w-[165px] h-auto">
                  <img
                    src="https://static.wixstatic.com/media/a9013c_58ff36a31e874a4e86bb346f25713279~mv2.png/v1/fill/w_705,h_479,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a9013c_58ff36a31e874a4e86bb346f25713279~mv2.png"
                    alt=""
                  />
                </div>

                <div class="w-[165px] h-auto">
                  <img
                    src="https://static.wixstatic.com/media/a9013c_78c6d43dc96f433888e4f90c364e9e12~mv2.png/v1/fill/w_705,h_479,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a9013c_78c6d43dc96f433888e4f90c364e9e12~mv2.png"
                    alt=""
                  />
                </div>

                <div class="w-[165px] h-auto">
                  <img
                    src="https://static.wixstatic.com/media/a9013c_3267fc63171f4d6eac5a5c9b645def24~mv2.jpg/v1/fill/w_845,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/stranger_storyboard_1%20(2)_P%C3%A1gina_5_edite.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="h-[400px]">
              <div class="w-[600px] h-full ">
                <img
                  src="https://static.wixstatic.com/media/a9013c_b9060ba4e405472288aa20acae06a838~mv2.png/v1/fill/w_479,h_241,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a9013c_b9060ba4e405472288aa20acae06a838~mv2.png"
                  class="object-contain h-full w-full"
                  alt=""
                />
              </div>
            </div>
          </li>
          <li className="flex gap-4 h-full min-w-full items-center items-scroll">
            <div className="flex flex-col gap-1">
              <div>
                <h4 className="text-4xl font-semibold font-proxima tracking-wide">
                  Stranger
                  <span className="text-xl text-red-600"> (Thriller)</span>
                </h4>
                <p className="tracking-wide">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Impedit deserunt praesentium atque consectetur, quis ipsa qui
                  accusantium totam temporibus mollitia tempore amet
                  necessitatibus nemo nihil quisquam maiores fuga est facilis.
                </p>
              </div>

              <div class="flex flex-wrap gap-2 mt-4">
                <div class="w-[165px] h-auto">
                  <img
                    src="https://static.wixstatic.com/media/a9013c_139f540942244b4baef09a4ae040f49f~mv2.png/v1/crop/x_5,y_0,w_2649,h_1800/fill/w_1198,h_814,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a9013c_139f540942244b4baef09a4ae040f49f~mv2.png"
                    alt=""
                  />
                </div>
                <div class="w-[165px] h-auto">
                  <img
                    src="https://static.wixstatic.com/media/a9013c_17bb052dcc2a4a808413ad28126cd0e7~mv2.png/v1/fill/w_705,h_479,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a9013c_17bb052dcc2a4a808413ad28126cd0e7~mv2.png"
                    alt=""
                  />
                </div>

                <div class="w-[165px] h-auto">
                  <img
                    src="https://static.wixstatic.com/media/a9013c_58ff36a31e874a4e86bb346f25713279~mv2.png/v1/fill/w_705,h_479,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a9013c_58ff36a31e874a4e86bb346f25713279~mv2.png"
                    alt=""
                  />
                </div>

                <div class="w-[165px] h-auto">
                  <img
                    src="https://static.wixstatic.com/media/a9013c_78c6d43dc96f433888e4f90c364e9e12~mv2.png/v1/fill/w_705,h_479,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a9013c_78c6d43dc96f433888e4f90c364e9e12~mv2.png"
                    alt=""
                  />
                </div>

                <div class="w-[165px] h-auto">
                  <img
                    src="https://static.wixstatic.com/media/a9013c_3267fc63171f4d6eac5a5c9b645def24~mv2.jpg/v1/fill/w_845,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/stranger_storyboard_1%20(2)_P%C3%A1gina_5_edite.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="h-[400px]">
              <div class="w-[600px] h-full ">
                <img
                  src="https://static.wixstatic.com/media/a9013c_b9060ba4e405472288aa20acae06a838~mv2.png/v1/fill/w_479,h_241,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a9013c_b9060ba4e405472288aa20acae06a838~mv2.png"
                  class="object-contain h-full w-full"
                  alt=""
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
