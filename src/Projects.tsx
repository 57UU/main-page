import Pages from "./Pages";
import { Button, theme } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { Divider } from 'antd';

const { Meta } = Card;
class Project {
    title: string;
    description: string;
    link: string;
    image: string;
    tags: string[] = [];
    constructor(title: string, description: string, link: string, image: string = "", tags: string[] = []) {
        this.title = title;
        this.description = description;
        this.link = link;
        this.image = image;
        this.tags = tags;
    }
}
const MyProjects = [
    new Project("Shape Weather", "一个跨平台天气应用", "https://github.com/57UU/Shape_Weather", "shape-weather.avif", ["flutter", "dart"]),
    new Project("SCU Plus", "四川大学教务系统增强浏览器扩展", "https://github.com/The-Brotherhood-of-SCU/scu-plus", "scu-plus.avif", ["typescript", "chrome", "react"]),
    new Project("SCU-CS-Class-Materials", "四川大学计算机学院本科课程资料", "https://github.com/KarryRen/SCU-CS-Class-Materials", "SCU-CS-Class-Materials.avif", ["notebook"]),
    new Project("Mouse Sync", "在多台电脑间广播键鼠操作", "https://github.com/57UU/MouseSync", "", ["C#", ".Net"]),
]
const myTools = [
    new Project("真值表生成器", "一键生成LaTeX/Markdown/Word真值表", "https://github.com/57UU/truth_table_generator", "truth-table-gen.avif", ["react", "algorithm"]),
    new Project("锐评", "何锐老师的谆谆教诲，启迪我们前进的道路", "https://the-brotherhood-of-scu.github.io/herui_saying/", "herui-saying.avif", ["react", "education"])
]

function Projects({ setPage }: { setPage: (page: Pages) => void }) {
    const gotoHome = () => {
        setPage(Pages.Home)
    }
    return (<>
        {Title(gotoHome)}
        <br />
        <Divider>Projects</Divider>
        {Gallery(MyProjects)}
        <Divider>Tools</Divider>
        {Gallery(myTools)}
        <ViewMore />
        <br />
    </>)
}

export default Projects;
function Gallery(projects: Project[],) {
    return <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 24
    }}>
        {projects.map(project => (
            <ProjectCard key={project.title} {...project} />
        ))}
    </div>
}

function ViewMore() {
    return (
        <div style={{ textAlign: 'center', marginTop: 20 }}>
            <a href="https://github.com/57UU" target="_blank" rel="noopener noreferrer">
                <span style={{
                    color: '#2196F3',
                    fontWeight: 'bold',
                    textDecoration: 'underline',
                    transition: 'color 0.3s ease'
                }}>
                    View More on My GitHub
                </span>
            </a>
        </div>
    );
}

function Title(gotoHome: () => void) {
    const {
        token: { colorPrimaryActive },
    } = theme.useToken();
    return <div style={{
        backgroundColor: colorPrimaryActive,
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        color: 'white'
    }}>
        <Button
            type="text"
            icon={<ArrowLeftOutlined style={{ fontSize: '20px' }} />}
            onClick={gotoHome}
            style={{ color: 'white', marginRight: 16 }}
        />
        <h1 style={{
            margin: 0,
            fontSize: '1.5rem',
            fontWeight: 500
        }}>
            我参与的开源项目
        </h1>
    </div>
}

function ProjectCard(project: Project) {
    return (
        <Card
            hoverable
            style={{
                width: 300,
                margin: 16,
            }}
            cover={
                <img
                    alt={project.title}
                    src={`../projects/${project.image === "" ? "default.svg" : project.image}`}
                    style={{
                        height: 200,
                        objectFit: 'cover',
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8
                    }}
                />
            }
            onClick={() => window.open(project.link, '_blank')}
        >
            <Meta title={project.title} description={project.description} />
            <div style={{ paddingTop: 5 }}></div>
            {Tags(project.tags)}

            <div style={{
                textAlign: 'right',
                color: "gray",
                fontSize: 25,
                paddingRight: 5,
            }}>
                <ArrowRightOutlined />
            </div>
        </Card>
    );
}
function Tags(tags: string[]) {
    const {
        token: { colorPrimaryBgHover },
    } = theme.useToken();
    return <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        margin: '12px 0'
    }}>
        {tags.map(tag => (
            <span key={tag} style={{
                backgroundColor: colorPrimaryBgHover,
                borderRadius: 4,
                padding: '4px 8px',
                fontSize: '0.85em',
            }}>
                {tag}
            </span>
        ))}
    </div>
}