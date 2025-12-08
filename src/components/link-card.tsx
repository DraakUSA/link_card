"use client";

import type { ElementType } from 'react';
import { Github, Globe, Linkedin, Mail, type LucideIcon } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const iconComponents: Record<string, LucideIcon> = {
  Globe,
  Linkedin,
  Github,
  Mail,
};

type Link = {
  label: string;
  url: string;
  icon: string;
};

type User = {
  name: string;
  title: string;
  avatarUrl: string;
  avatarHint: string;
  avatarFallback: string;
  links: Link[];
};

export function LinkCard({ user }: { user: User }) {
  return (
    <Card className="w-full max-w-sm rounded-2xl shadow-lg animate-in fade-in zoom-in-95 duration-500">
      <CardHeader className="items-center text-center pt-8">
        <Avatar className="h-24 w-24 border-4 border-background ring-4 ring-primary">
          <AvatarImage src={user.avatarUrl} alt={user.name} data-ai-hint={user.avatarHint} />
          <AvatarFallback>{user.avatarFallback}</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-6 p-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground font-headline">{user.name}</h1>
          <p className="text-md text-muted-foreground">{user.title}</p>
        </div>
        <div className="flex w-full flex-col gap-3">
          {user.links.map((link, index) => {
            const IconComponent = iconComponents[link.icon];
            return (
              <Button
                key={link.label}
                variant="default"
                size="lg"
                asChild
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${200 + index * 100}ms`, animationFillMode: 'backwards' }}
              >
                <a 
                  href={link.url} 
                  target={link.url.startsWith('mailto:') ? '_self' : '_blank'} 
                  rel="noopener noreferrer"
                >
                  {IconComponent && <IconComponent className="mr-3 h-5 w-5" />}
                  {link.label}
                </a>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
