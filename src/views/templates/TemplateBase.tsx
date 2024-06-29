export const TemplateBase = ({ children }: Html.PropsWithChildren) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/public/globals.css" />
        <title>Toolhunt - find your great tools!</title>
      </head>
      <body>{children}</body>
    </html>
  );
};
