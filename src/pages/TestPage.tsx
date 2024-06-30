import * as Yup from 'yup';

import { useCreatePost } from '@homework-task/hooks/useCreatePost';
import CreateForm from '@homework-task/components/CreateForm';
import List from '@homework-task/components/List';
import TextField from '@homework-task/components/TextField';
import DynamicPage, {
    SectionProps,
} from '@homework-task/components/DynamicPage';
import { PostFormType } from '@homework-task/types/post';

const sections: SectionProps[] = [
    {
        key: 'section-1',
        type: 'layout',
        props: { background: 'bg-gray-100 p-4' },
        components: [
            {
                key: 'component-1',
                type: 'hero',
                props: {
                    title: 'Welcome to Our Site',
                    image: 'https://www.thesprucepets.com/thmb/hxWjs7evF2hP1Fb1c1HAvRi_Rw0=/2765x0/filters:no_upscale():strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg',
                },
            },
        ],
    },
    {
        key: 'section-2',
        type: 'columnLayout',
        props: { background: 'bg-mainGreen', className: 'py-16' },
        components: [
            {
                key: 'component-2',
                type: 'itemsShowcase',
                props: {
                    items: [
                        { title: 'Title 1', description: 'Test 1' },
                        { title: 'Title 2', description: 'Test 2' },
                        { title: 'Title 3', description: 'Test 3' },
                        { title: 'Title 4', description: 'Test 4' },
                    ],
                },
            },
            {
                key: 'component-3',
                type: 'trustBar',
                props: {
                    images: [
                        'https://e7.pngegg.com/pngimages/92/187/png-clipart-logo-company-business-creative-company-logo-free-logo-design-template-company.png',
                        'https://img.lovepik.com/element/40172/7089.png_1200.png',
                        'https://w7.pngwing.com/pngs/732/34/png-transparent-logo-amazon-com-brand-flipkart-others-text-orange-logo-thumbnail.png',
                        'https://www.liblogo.com/img-logo/fa8227f994-fast-company-logo-fast-company-logo-transparent-png-stickpng.png',
                        'https://w7.pngwing.com/pngs/275/961/png-transparent-chanel-logo-brand-gucci-logo-text-trademark-fashion.png',
                    ],
                },
            },
            {
                key: 'component-4',
                type: 'cards',
                props: {
                    cards: [
                        {
                            title: 'Summer Vacation',
                            image: 'https://t3.ftcdn.net/jpg/03/82/24/44/360_F_382244401_FNIivSDbE7ojw5sT70WYVgmFsw2R7DHD.jpg',
                            description:
                                'Enjoy your summer vacation at the best resorts!',
                            background: 'bg-yellow-200',
                            onClick: () => {
                                console.log('Summer Vacation clicked');
                            },
                            buttonText: 'Book Now',
                        },
                        {
                            title: 'Winter Wonderland',
                            image: 'https://t3.ftcdn.net/jpg/03/82/24/44/360_F_382244401_FNIivSDbE7ojw5sT70WYVgmFsw2R7DHD.jpg',
                            description: 'Experience the magic of winter!',
                            background: 'bg-blue-200',
                            onClick: () => {
                                console.log('Winter Wonderland clicked');
                            },
                            buttonText: 'Explore',
                        },
                        {
                            title: 'Spring Blossom',
                            image: 'https://t3.ftcdn.net/jpg/03/82/24/44/360_F_382244401_FNIivSDbE7ojw5sT70WYVgmFsw2R7DHD.jpg',
                            description:
                                'Feel the freshness of spring with beautiful blossoms.',
                            background: 'bg-pink-200',
                            onClick: () => {
                                console.log('Spring Blossom clicked');
                            },
                            buttonText: 'See More',
                        },
                        {
                            title: 'Autumn Adventure',
                            image: 'https://t3.ftcdn.net/jpg/03/82/24/44/360_F_382244401_FNIivSDbE7ojw5sT70WYVgmFsw2R7DHD.jpg',
                            description:
                                'Embark on an autumn adventure and enjoy the fall foliage.',
                            background: 'bg-orange-200',
                            onClick: () => {
                                console.log('Autumn Adventure clicked');
                            },
                            buttonText: 'Join Now',
                        },
                        {
                            title: 'City Lights',
                            image: 'https://t3.ftcdn.net/jpg/03/82/24/44/360_F_382244401_FNIivSDbE7ojw5sT70WYVgmFsw2R7DHD.jpg',
                            description:
                                'Discover the vibrant life in the city at night.',
                            background: 'bg-gray-200',
                            onClick: () => {
                                console.log('City Lights clicked');
                            },
                            buttonText: 'Discover',
                        },
                    ],
                },
            },
        ],
    },
];

export const TestPage: React.FC = () => {
    const validationSchema = Yup.object<PostFormType>({
        title: Yup.string().required('Required'),
        content: Yup.string().required('Required'),
    });

    return (
        <>
            <List />
            <div className="px-80">
                <CreateForm<PostFormType>
                    useMutation={useCreatePost}
                    validationSchema={validationSchema}
                    renderForm={(formik) => (
                        <>
                            <TextField
                                label="Title"
                                value={formik.values.title}
                                type="text"
                                name="title"
                                error={
                                    formik.touched.title && formik.errors.title
                                }
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <TextField
                                textArea
                                label="Content"
                                value={formik.values.content}
                                type="text"
                                name="content"
                                error={
                                    formik.touched.content &&
                                    formik.errors.content
                                }
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </>
                    )}
                />
            </div>
            <DynamicPage sections={sections} />
        </>
    );
};
