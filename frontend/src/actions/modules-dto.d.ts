interface Project {
    name: string;
    url: string;

    startDate: Date;
    endDate: Date;
}

interface Module {
    title: string;
    url: string;
    code: string;
    instance: string;
    credits: number;
    skills: string[];

    startDate: Date;
    endDate: Date;
    endRegistrationDate: Date;

    remote: boolean;
    project?: Project;
    appointements: string[];
}