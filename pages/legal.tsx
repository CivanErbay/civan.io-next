import Link from "next/link";

export default function Legal() {
  return (
    <div className="flex flex-col justify-center max-w-5xl w-full mx-auto text-left inset-0 font-Trispace shadow-2xl bg-white p-9">
      <p className="flex flex-col py-5">
        <span className="font-bold"> Provider Pursuant to § 5 TMG </span>
        Civan Erbay Widdersdorfer Str. 230 50825 Köln Germany Phone:
        (+49)15116574098 E-Mail: civan.erbay@web.de Website: civan.io
      </p>
      <p className="flex flex-col py-5">
        <span className="font-bold">Responsible for content </span>
        Pursuant to § 55, sect. 2 of RStV: Civan Erbay
      </p>
      <p className="flex flex-col py-5">
        <span className="font-bold">Data privacy </span>This website does not
        use any technologies to individually track users. No cookies are set and
        no analytics scripts are included.
      </p>
      <p className="py-5">
        {" "}
        This website is hosted via Vercel. For their Privacy Policy please refer
        here: vercel.com/legal/privacy-policy
      </p>

      <Link href={"./"}>
        <a className="font-bold underline"> Civan.io</a>
      </Link>
    </div>
  );
}
