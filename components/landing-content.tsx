"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const features = [
    {
        name: "Adam",
        avatar: "A",
        title: "Software Engineer",
        description: "Hands down the best AI tool I've ever used!"
    },
    {
        name: "John",
        avatar: "J",
        title: "Lawyer",
        description: "I can't believe how easy it is to use this tool!"
    },
    {
        name: "Sara",
        avatar: "S",
        title: "Designer",
        description: "I've been using this tool for a while now and I'm loving it!"
    },
    {
        name: "Mike",
        avatar: "M",
        title: "Product Manager",
        description: "This tool is a game changer!"
    },
    {
        name: "Bryan",
        avatar: "B",
        title: "Lead Engineer",
        description: "This tool has saved me so much time!"
    },
    {
        name: "Jane",
        avatar: "J",
        title: "UX Designer",
        description: "I've been using this tool for a while now and I'm loving it!"
    },
    {
        name: "Bob",
        avatar: "B",
        title: "Software Engineer",
        description: "Definitely the best AI tool I've ever used!"
    },
    {
        name: "Sally",
        avatar: "S",
        title: "Teacher",
        description: "This tool helped me get my work done faster!"
    }
]

export const LandingContent = () => {
    return(
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {features.map((feature) => (
                    <Card key={feature.description} className="bg-[#192339] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{feature.name}</p>
                                    <p className="text-zinc-400 text-sm">{feature.title}</p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {feature.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    );
};