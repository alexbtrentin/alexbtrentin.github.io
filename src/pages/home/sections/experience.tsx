
import { FaGraduationCap, FaBriefcase } from "react-icons/fa6";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { education } from "@/data/education";
import { workExperience } from "@/data/workExperience";

// Extended experience fields
type WorkExperienceItem = {
  title: string;
  company: string;
  years: string;
  logo?: string | null;
  description?: string;
  skills?: string[];
};

export default function ExperienceSection() {
  const experiences = workExperience as WorkExperienceItem[];

  return (
    <div className="flex flex-col gap-4">

      {/* EDUCATION */}
      <Card className="rounded-md md:px-2">
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-2 text-plus">
            <FaGraduationCap />
            Education
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-5">
          {education.map((edu, index) => (
            <div key={index} className="flex items-start gap-4">

              {edu.logo && (
                <img
                  src={edu.logo}
                  alt={`${edu.school} logo`}
                  className="w-12 h-12 object-contain rounded shrink-0"
                  loading="lazy"
                />
              )}

              <div className="min-w-0">
                <div className="font-semibold">
                  {edu.school}
                </div>

                <div className="text-sm text-muted-foreground">
                  {edu.years}
                </div>

                <div className="text-sm">
                  {edu.degree}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* WORK EXPERIENCE */}
      <Card className="rounded-md md:px-2">
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-2 text-plus">
            <FaBriefcase />
            Research & Professional Experience
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {experiences.map((job, index) => (
            <div
              key={index}
              className="flex items-start gap-4"
            >

              {/* Optional institution logo */}
              {job.logo && (
                <img
                  src={job.logo}
                  alt={`${job.company} logo`}
                  className="w-12 h-12 object-contain rounded shrink-0"
                  loading="lazy"
                />
              )}

              <div className="flex-1 min-w-0 space-y-2">

                {/* Position */}
                <div>
                  <div className="font-semibold">
                    {job.title}
                  </div>

                  <div className="text-sm text-muted-foreground">
                    {job.company}
                  </div>

                  <div className="text-xs text-muted-foreground mt-1">
                    {job.years}
                  </div>
                </div>

                {/* Description */}
                {job.description && (
                  <p className="text-sm leading-relaxed text-foreground/85">
                    {job.description}
                  </p>
                )}

                {/* Skills */}
                {job.skills && job.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {job.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="inline-flex items-center rounded-md border border-border bg-muted/50 px-2 py-1 text-xs text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

              </div>
            </div>
          ))}
        </CardContent>
      </Card>

    </div>
  );
}
