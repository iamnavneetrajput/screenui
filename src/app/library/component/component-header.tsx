interface ComponentHeaderProps {
    title: string;
    description: string;
  }
  
  export function ComponentHeader({ title, description }: ComponentHeaderProps) {
    return (
      <div className="mb-6">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-muted-foreground mt-2">{description}</p>
      </div>
    );
  }