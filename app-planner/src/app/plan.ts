export class Plan {
  user_id: number;
  username: string;
  apps: [{
      title: string;
      components: [{
          title: string;
          description: string;
          url: string;
          componentTutorials: [{
              title: string;
              url: string;
            }]
        }]
    }];
}
