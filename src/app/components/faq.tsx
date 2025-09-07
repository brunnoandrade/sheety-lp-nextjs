export default function FAQ() {
  return (
    <section className="py-20 bg-[#f6f7fa] rounded-3xl">
      <div className="h-full max-w-5xl mx-auto">
        <div className="flex flex-col gap-12">
          <div>
            <h2 className="font-semibold tracking-tighter text-5xl text-center text-black">
              FAQ
            </h2>
            <p className="mx-auto mt-4 text-sm text-gray-600 text-center">
              Frequent questions &amp; answers
            </p>
          </div>
          <div className="flex flex-col mx-auto max-w-2xl gap-6 text-base text-gray-400 w-full px-4">
            <details>
              <summary className="cursor-pointer text-base font-medium tracking-tight text-gray-900">
                What does CreateLPImport?
              </summary>
              <p className="pt-4 text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                quae distinctio nemo natus, accusantium magni, nam eveniet sint
                iusto odio assumenda laborum. Nobis vero quas consequatur
                aspernatur blanditiis maiores expedita?
              </p>
            </details>
            <details>
              <summary className="cursor-pointer text-base font-medium tracking-tight text-gray-900">
                What coding languages ?
              </summary>
              <p className="pt-4 text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                quae distinctio nemo natus, accusantium magni, nam eveniet sint
                iusto odio assumenda laborum. Nobis vero quas consequatur
                aspernatur blanditiis maiores expedita?
              </p>
            </details>
            <details>
              <summary className="cursor-pointer text-base font-medium tracking-tight text-gray-900">
                How fast will I get my coded website?
              </summary>
              <p className="pt-4 text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                quae distinctio nemo natus, accusantium magni, nam eveniet sint
                iusto odio assumenda laborum. Nobis vero quas consequatur
                aspernatur blanditiis maiores expedita?
              </p>
            </details>
            <details>
              <summary className="cursor-pointer text-base font-medium tracking-tight text-gray-900">
                How can I check the progress of my website?
              </summary>
              <p className="pt-4 text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                quae distinctio nemo natus, accusantium magni, nam eveniet sint
                iusto odio assumenda laborum. Nobis vero quas consequatur
                aspernatur blanditiis maiores expedita?
              </p>
            </details>
            <details>
              <summary className="cursor-pointer text-base font-medium tracking-tight text-gray-900">
                If I have a blog, do you count each post as a separate page?
              </summary>
              <p className="pt-4 text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                quae distinctio nemo natus, accusantium magni, nam eveniet sint
                iusto odio assumenda laborum. Nobis vero quas consequatur
                aspernatur blanditiis maiores expedita?
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
