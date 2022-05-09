export interface IProject {
  id: number;
  attributes: {
    title: string;
    description: string;
    status: string;
    liveUrl: string;
    createdAt: string;
    slug: string;
    thumbnail: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    screenshots: {
      data: [
        attributes: {
          url: string;
          format: {
            small: {
              url: string;
            };
            medium: {
              url: string;
            };
          };
        }
      ];
    };

    tech_stacks: {
      data: [
        {
          id: number;
          attributes: {
            technology: string;
          };
        }
      ];
    };
  };
}
