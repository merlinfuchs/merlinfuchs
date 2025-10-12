import {
  faDiscord,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import CopyrightNotice from "./components/CopyrightNotice";
import "./styles/eostrix.css";
import "./styles/globals.css";
import * as swetrix from "swetrix";

if (process.env.NODE_ENV === "production" && typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    swetrix.init("J5f9TOyaRqyB", {
      apiURL: "https://swetrix.vaven.io/log",
    });
    swetrix.trackViews();
    swetrix.trackErrors({
      sampleRate: 1,
    });
  });
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Merlin Fuchs",
  description: "23 year old tech enthusiast and web developer from Germany",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "bg-dark text-gray-100 px-5 leading-9",
          inter.className
        )}
      >
        <div className="max-w-4xl mx-auto my-12">
          <div className="flex mb-14 justify-between space-x-5">
            <Link
              href="/"
              className="font-semibold text-2xl text-orange-300 tracking-wide"
            >
              Merlin Fuchs
            </Link>
            <div className="flex items-center space-x-5 text-gray-300">
              <a href="https://github.com/merlinfuchs" target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="h-5 w-5 hover:text-orange-300"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/merlin-fuchs/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="h-6 w-6 hover:text-orange-300"
                />
              </a>
              <a
                href="https://discord.com/users/386861188891279362"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faDiscord}
                  className="h-6 w-6 hover:text-orange-300"
                />
              </a>
            </div>
          </div>
          <div className="text-gray-200">{children}</div>

          <CopyrightNotice />
        </div>
      </body>
    </html>
  );
}
