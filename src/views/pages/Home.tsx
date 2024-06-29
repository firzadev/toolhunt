import { TemplateBase } from "../templates/TemplateBase";

export const Home = () => {
  return (
    <TemplateBase>
      <header class="flex justify-between items-center">
        <a href="" class="text-green-400">
          toolhunt.
        </a>
        <a href="">
          <button class="bg-blue-400">Submit tools</button>
        </a>
      </header>
      <section>
        <div class="text-blue-700">Introducing Toolhunt</div>
        <h1 class="text-red-500">
          Discover the beneficial tools for your developments
        </h1>
        <input placeholder="search tools..." />
      </section>
    </TemplateBase>
  );
};
