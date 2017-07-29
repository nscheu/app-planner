export class Plan {
  user_id: number;
  name: string;
  username: string;
  apps: Apps[];
}

export class Apps {
  title: string;
  components: AppComponent[];
}

export class AppComponent {
  title: string;
  description: string;
  url: string;
  componentTutorials: ComponentTutorial[];
}

export class ComponentTutorial {
  title: string;
  url: string;
}
