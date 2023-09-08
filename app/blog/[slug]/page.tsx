import Text from "@/components/blocks/Text";
import Quote from "@/components/blocks/Quote";
import Code from "@/components/blocks/Code";

export default function BlogDetail() {
  return (
    <div className="py-[6rem]">
      <div className="mx-auto flex max-w-[60rem] flex-col gap-8">
        <div className="flex flex-wrap justify-center gap-4">
          {["cpp"].map((tag, index) => (
            <div
              key={index}
              className="tag border-[1px] border-borderColor px-3 py-2 font-sansAlt text-2xs uppercase text-white transition-all duration-500"
            >
              # {tag}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-center text-5xl leading-tight">
            Functional Programming in C++
          </h1>
          <h2 className="text-center text-2xl font-extralight italic">
            With the Standard Template Library
          </h2>
        </div>
        <p className="mt-2 text-center font-sansAlt text-xs">
          Written on 1 Jul 2023 &bull; 4 min read
        </p>
        <img
          className="mt-6 h-auto w-full object-cover object-center"
          src="/images/sphere-pixel.png"
          alt=""
        />
      </div>
      <div className="mt-[6rem]">
        <Text
          content="<p>
        I was introduced to C++ in college through an introductory programming
        course, where I gained the impression (like many others) that it was
        just C with classes. But most of the interesting features of modern C++
        come from the <a href='#'>STL</a>, and while it is heavily object-oriented, C++ supports
        many different programming paradigms, including functional programming.
      </p>"
        />
        <Quote />
        <Text
          content="<h2>What is functional programming?</h2>
      <p>
        <a href='#'>Functional programming</a> is a programming paradigm that emphasizes
        immutability through the use of pure functions, which always return the
        same value for a given input and do not modify state outside of the
        scope of the function. The result is code that is much easier to test
        and fewer side effects that you have to keep track of in your
        application.<h2>Functors and Lambdas</h2><p>Before getting into the <a href='#'>higher-order functions</a> available in C++, it's important to understand functors and lambdas. Ordinary functions in C++ are not considered <a href='#'>first-class citizens</a>, meaning that they aren't treated like regular variables or objects. We can get around this with function pointers, but a simpler and more flexible approach is to use a functor or lambda expression.</p><p>A functor (or function object) is an instance of a class or struct that can be called like a function. In C++, we can create functors by overloading the <code>console.log(x);</code> operator.</p>
      </p>"
        />
        <Code
          language="cpp"
          code={`#include <iostream>
#include <string>

struct Greeter {
	std::string operator()(const std::string& name) {
		return "Hi, " + name + "!";
	}
};

int main() {
	Greeter greet;
	std::cout << greet("Kyle") << '\\n'; // Hi, Kyle!
	return 0;
}`}
        />
      </div>
    </div>
  );
}
