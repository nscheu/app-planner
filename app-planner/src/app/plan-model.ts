export class Plan {
  user_id: number;
  name: string;
  username: string;
  applications: Application[];
}

export class Application {
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

export const states = ['CA', 'MD', 'OH', 'VA'];
