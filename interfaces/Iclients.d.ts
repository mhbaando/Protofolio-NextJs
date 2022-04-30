export interface IClient {
  id: number;
  attributes: {
    name: string;
    website: string;
    logo: {
      data: [
        {
          attributes: {
            url: string;
          };
        }
      ];
    };
  };
}
