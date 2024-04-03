const Footer = () => (
    <footer className="flex w-full text-blue flex-row mt-8 flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 p-6 text-center md:justify-between">
      <p color="blue-gray" className="font-normal">
        &copy; Hedy Software 2024
      </p>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/pablo-garay-dev/" className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
            About me
          </a>
        </li>
        <li>
          <p className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
            Project
          </p>
        </li>
      </ul>
    </footer>
  );

export default Footer