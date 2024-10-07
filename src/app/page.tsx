import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import H1 from "@/components/ui/h1";
import H2 from "@/components/ui/h2";
import H3 from "@/components/ui/h3";
import P from "@/components/ui/p";
import github from "@/lib/assets/github.png";
import voltus from "@/lib/assets/facevector.webp";
import profilePhoto from "@/lib/assets/profile-photo.jpeg";
import x from "@/lib/assets/x.png";
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Paperclip,
  PaperclipIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-dvh max-w-3xl min-w-[375px] mx-auto px-2 py-20 space-y-16">
      <section className="flex justify-between">
        <div className="text-lg space-y-2">
          <div>
            <H1>Brian Maiyo</H1>
            <p className="mt-1 tracking-tight">Engineering Consultant</p>
            <Link
              href="https://www.google.com/maps/place/Kigali"
              target="_blank"
              className="flex text-muted-foreground w-fit hover:underline"
            >
              <MapPin className="size-3 my-auto mr-1" />
              <p className="text-xs ">Kigali, Rwanda</p>
            </Link>
          </div>

          <div className="pt-2 space-x-2">
            <Button variant="outline" size="icon" asChild>
              <Link href="tel: +250 782976515" target="_blank">
                <Phone
                  className="text-muted-foreground"
                  size={20}
                  aria-label="phone"
                />
              </Link>
            </Button>

            <Button variant="outline" size="icon" asChild>
              <Link href="mailto: kipropbrian@gmail.com" target="_blank">
                <Mail
                  className="text-muted-foreground"
                  size={20}
                  aria-label="email"
                />
              </Link>
            </Button>

            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com/kipropbrian" target="_blank">
                <Image
                  src={github}
                  alt="logo"
                  width={19}
                  height={19}
                  aria-label="github"
                />
              </Link>
            </Button>

            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/brian-maiyo-0baa95b4/"
                target="_blank"
              >
                <Linkedin
                  className="text-muted-foreground"
                  size={20}
                  aria-label="phone"
                />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="/brianmaiyocv.pdf" target="_blank">
                <PaperclipIcon
                  className="text-muted-foreground"
                  size={20}
                  aria-label="email"
                />
              </Link>
            </Button>
          </div>
        </div>

        <div>
          <Image
            src={profilePhoto}
            alt="me"
            width={260}
            height={260}
            priority
            className="rounded-xl min-w-40"
          />
        </div>
      </section>

      <section className="space-y-10">
        <H2>About</H2>

        <P>
          I'm Brian Maiyo, an accomplished Engineering Manager with over 10
          years of experience leading software development teams and
          spearheading successful technology projects. My expertise lies in
          full-stack development, DevOps, and project management, and I have a
          proven track record of boosting operational efficiency. I thrive on
          mentoring and developing talent, cultivating collaborative team
          environments, and aligning technical strategies with core business
          objectives.
        </P>
      </section>

      <section className="space-y-10">
        <H2>Side Projects</H2>

        <div className="space-y-2">
          <div className="flex gap-4">
            <Link
              href="https://voltus.brianmaiyo.dev"
              target="_blank"
              className="shrink-0"
            >
              <Image
                src={voltus}
                alt="Green Vinyl Graphics website preview"
                width={160}
                height={160}
                className="rounded h-full object-cover"
              />
            </Link>
            <div>
              <Link href="https://voltus.brianmaiyo.dev" target="_blank">
                <H3>Voltus</H3>
              </Link>
              <P>
                Voltus is a website that searches through images and identifies
                public officials. This is useful to journalists, OSINT
                community, and any curious person who has an image and is trying
                to figure out who the person in the image is.
              </P>
            </div>
          </div>
          <div className="flex flex-wrap gap-1">
            <Badge variant="secondary">Vue.js</Badge>
            <Badge variant="secondary">JavaScript</Badge>
            <Badge variant="secondary">Tailwind CSS</Badge>
            <Badge variant="outline">Sentry</Badge>
            <Badge variant="outline">PostHog</Badge>
            <Badge variant="outline">Face++</Badge>
            <Badge variant="outline">Shadcn/ui</Badge>
            <Badge variant="outline">SQLite</Badge>
            <Badge variant="outline">Laravel</Badge>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <H2>Skills</H2>
        <div className="space-y-2">
          <P>
            As an Engineering Manager at Andela since 2021, I manage and lead a
            team of seven engineers. I focus on cultivating a positive work
            environment and strive to achieve a high employee satisfaction rate
            by promoting continuous learning and supporting my team's
            professional growth. In addition to my leadership responsibilities,
            I develop and maintain detailed technical roadmaps for Andela's
            clients, ensuring their projects align with our engineering
            capabilities and strategic goals. This involves understanding client
            needs, defining technical solutions, and outlining a clear path for
            project execution. This approach has led to improvements in project
            delivery timelines and increased client satisfaction.
          </P>

          <div className="flex flex-wrap gap-1">
            <Badge variant="secondary">Javascript</Badge>
            <Badge variant="secondary">Node.js</Badge>
            <Badge variant="secondary">Typescript</Badge>
            <Badge variant="secondary">Python</Badge>
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">MongoDB</Badge>
            <Badge variant="secondary">C</Badge>
            <Badge variant="outline">VueJS</Badge>
            <Badge variant="secondary">Data Analytics</Badge>
            <Badge variant="secondary">Tailwind CSS</Badge>
            <Badge variant="secondary">NoSQL</Badge>
            <Badge variant="secondary">PostgreSQL</Badge>
            <Badge variant="outline">Git</Badge>
            <Badge variant="outline">GitHub</Badge>
            <Badge variant="outline">Redux</Badge>
            <Badge variant="outline">AWS</Badge>
            <Badge variant="outline">Cloudflare</Badge>
            <Badge variant="outline">DigitalOcean</Badge>
            <Badge variant="outline">Server Administration</Badge>
            <Badge variant="outline">Data Structures & Algorithms</Badge>
            <Badge variant="secondary">HTML</Badge>
            <Badge variant="secondary">CSS</Badge>
            <Badge variant="outline">Swagger</Badge>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <H2>Education</H2>

        <div className="space-y-10">
          <div>
            <span className="flex gap-4 items-baseline">
              <H3>Master of Science in Information Systems Security</H3>
              <P>2015 - Ongoing</P>
            </span>

            <P>
              Focus on both technical and managerial aspects of IT Security.
            </P>
          </div>
          <div>
            <span className="flex gap-4 items-baseline">
              <H3>Bachelor of Business Information Technology.</H3>
              <P>2008 - 2012</P>
            </span>

            <P>
              Strathmore University - Bachelor of Business Information
              Technology.
            </P>
          </div>
        </div>
      </section>
    </main>
  );
}
