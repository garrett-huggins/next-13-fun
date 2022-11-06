import { RunCommand, LineComment } from "../components/code";

export default function Home() {
  return (
    <div className="container mx-auto">
      <main>
        <h1 className="text-center text-2xl">Next.JS 13 Playground</h1>
        <pre className="bg-gray-900 max-w-xl mx-auto p-4 overflow-x-auto">
          <code>
            <RunCommand>npx</RunCommand> create-next-app@latest
            --experimental-app
            <LineComment># or</LineComment>
            <RunCommand>yarn</RunCommand> create next-app --experimental-app
            <LineComment># or</LineComment>
            <RunCommand>pnpm</RunCommand> create next-app --experimental-app
          </code>
        </pre>
      </main>
    </div>
  );
}
