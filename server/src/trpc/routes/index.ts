import { prisma } from "@/index";
import { router, t } from "../server";
import { z } from 'zod';


export const UserProfileInputSchema = z.object({
    id: z.string(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    email: z.string().email(),

    name: z.string(),
    about_me: z.string(),
    image_url: z.string(),

    country: z.string(),
    city: z.string(),
    phone: z.string(),

    // Project: z.array(ProjectSchema).optional(),
    // Education: z.array(EducationSchema).optional(),
    // JobExperience: z.array(ExperienceSchema).optional(),
    // JobAppliedTo: z.array(JobAppliedToSchema).optional(),
    // Skill: z.array(SkillSchema).optional(),
});


export const appRouter = router({
    getUserProfile: t.procedure
    .query(async(opts) => {
        return await prisma.userProfile.findMany();
    }),
    createUserProfile: t.procedure
        .input(UserProfileInputSchema)
        .mutation(async (opts) => {
     const user = await prisma.userProfile.create({
          data: opts.input
        });
        return user
       
        
      }),
});

export type AppRouter = typeof appRouter;


export const ProjectSchema = z.object({
    id: z.number(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    name: z.string(),
    description: z.string(),
    repoUrl: z.string(),
    // UserProfile: UserProfileSchema.optional(),
    userProfileId: z.string(),
    // programmingLanguages: z.array(ProgrammingLanguageSchema).optional(),
});

export const ProgrammingLanguageSchema = z.object({
    id: z.number(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    name: z.string(),
    color: z.string(),
    // frameworks: z.array(FrameworkSchema),
    // Project: ProjectSchema.optional(),
    projectId: z.number(),
});

export const FrameworkSchema = z.object({
    id: z.number(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    name: z.string(),
    description: z.string(),
    githubUrl: z.string().optional(),
    // ProgrammingLanguages: ProgrammingLanguageSchema.optional(),
    programmingLanguagesId: z.number(),
});

export const EducationInputSchema = z.object({
    id: z.number(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    institute: z.string(),
    level: z.string(),
    years: z.number(),
    // UserProfile: UserProfileSchema.optional(),
    userProfileId: z.string(),
});

export const ExperienceInputSchema = z.object({
    id: z.number(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    title: z.string(),
    description: z.string(),
    company: z.string().optional(),
    location: z.string().optional(),
    url: z.string().optional(),
    years: z.number(),
    // UserProfile: UserProfileSchema.optional(),
    userProfileId: z.string().optional(),
});

export const JobAppliedToInputSchema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string().optional(),
    company: z.string().optional(),
    location: z.string().optional(),
    url: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    // UserProfile: UserProfileSchema.optional(),
    userProfileId: z.string().optional(),
});

export const SkillInputSchema = z.object({
    id: z.number(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    name: z.string(),
    description: z.string(),
    url: z.string(),
    // UserProfile: UserProfileSchema.optional(),
    userProfileId: z.string().optional(),
});



