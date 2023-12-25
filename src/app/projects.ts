

export type ProjectItem = {
    title: string;
    description: string;
    image: string;
    tags?: string[];
};
  

export const projectList: ProjectItem[]  =  [
    {
        "title": "Streaming PC",
        "description": "Most popular online trading platform in Thailand",
        "image": "/assets/img/project-streaming.png",
        "tags": ["#frontend"]
    },
    {
        "title": "Technical Chart",
        "description": "No.3 top menu in Streaming, a chart cooperates with widely used chart library like trading view",
        "image": "/assets/img/project-chart.png",
        "tags": ["#frontend", "#backend", "#api"]
    },
    {
        "title": "e-Open Account",
        "description": "Most popular online trading platform in Thailand",
        "image": "/assets/img/project-oacc.png",
        "tags": ["#frontend"]
    },
    {
        "title": "Data Client",
        "description": "Java library providing realtime trading information",
        "image": "/assets/img/project-dtcn.png",
        "tags": ["#backend"]
    },
    {
        "title": "STT Customized Websites",
        "description": "All customized websites for STT products (internal websites)",
        "image": "/assets/img/project-nopic.png",
        "tags": ["#frontend"]
    },
    {
        "title": "STT API Gateways",
        "description": "APIs for each features for STT products",
        "image": "/assets/img/project-api.png",
        "tags": ["#frontend"]
    },
    {
        "title": "Patchara",
        "description": "Website for Patchara, a candle retailer",
        "image": "/assets/img/project-candle.png",
        "tags": ["#frontend", "#ui-design"]
    },
    {
        "title": "Brand Identity",
        "description": "My own brand identity design",
        "image": "/assets/img/project-spk.png",
        "tags": ["#design"]
    }
]