import { Education } from "@/lib/education"
import { Experince } from "@/lib/experience"
import { cn } from "@/lib/utils"

const About = () => {
    return (
        <>
 <div className="max-w-4xl">
      {/* Introduction Section */}
      <div className="space-y-2">
        <span className="text-blue-400">const </span>
        <span className="text-purple-400">introduction </span>
        <span className="text-muted-foreground">= </span>
        <span className="text-orange-400">
          &quot;Passionate programmer and Full-Stack Developer with 2+ years of
          experience. Achieved a track record of success in developing scalable
          web applications. Experienced in maintaining and refactoring legacy
          systems, as well as developing new systems for making initial launch
          and growth.&quot;
        </span>
        <span className="text-muted-foreground">;</span>
      </div>

      {/* Years of Experience */}
      <div className="space-y-2">
        <span className="text-blue-400">const </span>
        <span className="text-purple-400">yearsOfExperience </span>
        <span className="text-muted-foreground">= </span>
        <span className="text-orange-400">2+</span>
        <span className="text-muted-foreground">;</span>
      </div>

      {/* Experience Section */}
      <div className="space-y-4">
        <div>
          <span className="text-blue-400">const </span>
          <span className="text-purple-400">experience </span>
          <span className="text-muted-foreground">= [</span>
        </div>

        <div className="grid gap-4 pl-4">
          {Experince.map((exp, index) => (
            <div
              key={index}
              className={cn(
                "rounded-md border border-transparent p-4",
                "bg-[#1E293B] hover:border-white"
              )}
            >
              <h3 className="text-lg font-semibold mb-2">{exp.company}</h3>
              <div className="text-sm text-muted-foreground mb-2">
                {exp.role} | {exp.time}
              </div>
              <ul className="list-disc list-inside space-y-1">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-muted-foreground">];</div>
      </div>

      {/* Education Section */}
      <div className="space-y-4">
        <div>
          <span className="text-blue-400">const </span>
          <span className="text-purple-400">education </span>
          <span className="text-muted-foreground">= [</span>
        </div>

        <div className="pl-4 flex flex-col gap-3">
          {Education.map((edu, index) => (
            <div
              key={index}
              className={cn(
                "rounded-md border border-transparent p-4",
                "bg-[#1E293B] hover:border-white"
              )}
            >
              <h3 className="text-lg font-semibold mb-2">{edu.title}</h3>
              <div className="text-sm text-muted-foreground mb-2">
                {edu.institute} | {edu.time}
              </div>
            </div>
          ))}
        </div>

        <div className="text-muted-foreground">];</div>
      </div>
    </div>
  );        </>
    )
}

export default About