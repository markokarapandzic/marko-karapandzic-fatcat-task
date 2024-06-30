import React, { useMemo } from 'react';
import Layout, { LayoutProps } from '@homework-task/components/Layout';
import Button, { ButtonProps } from '@homework-task/components/Button';
import Cards, { CardsProps } from '@homework-task/components/Cards';
import Hero, { HeroProps } from '@homework-task/components/Hero';
import ItemsShowcase, {
    ItemsShowcaseProps,
} from '@homework-task/components/ItemsShowcase';
import List from '@homework-task/components/List';
import LoadingButton, {
    LoadingButtonProps,
} from '@homework-task/components/LoadingButton';
import PanelShowcase, {
    PanelShowcaseProps,
} from '@homework-task/components/PanelShowcase';
import TextField, { TextFieldProps } from '@homework-task/components/TextField';
import TrustBar, { TrustBarProps } from '@homework-task/components/TrustBar';
import ColumnLayout, { ColumnLayoutProps } from './ColumnLayout';

type LayoutType = 'layout' | 'columnLayout';
type ComponentType =
    | 'button'
    | 'cards'
    | 'hero'
    | 'itemsShowcase'
    | 'list'
    | 'loadingButton'
    | 'panelShowcase'
    | 'textField'
    | 'trustBar';

type LayoutPropsWithoutChildren = Omit<LayoutProps, 'children'>;
type LayoutColumnPropsWithoutChildren = Omit<ColumnLayoutProps, 'children'>;

interface ComponentProps {
    key: string;
    type: ComponentType;
    props?:
        | ButtonProps
        | CardsProps
        | HeroProps
        | ItemsShowcaseProps
        | LoadingButtonProps
        | PanelShowcaseProps
        | TextFieldProps
        | TrustBarProps;
}

export interface SectionProps {
    key: string;
    type: LayoutType;
    props?: LayoutPropsWithoutChildren | LayoutColumnPropsWithoutChildren;
    components: ComponentProps[];
}

interface DynamicPageProps {
    sections: SectionProps[];
}

const LAYOUTS: Record<LayoutType, React.ComponentType<any>> = {
    layout: Layout,
    columnLayout: ColumnLayout,
};

const COMPONENTS: Record<ComponentType, React.ComponentType<any>> = {
    button: Button,
    cards: Cards,
    hero: Hero,
    itemsShowcase: ItemsShowcase,
    list: List,
    loadingButton: LoadingButton,
    panelShowcase: PanelShowcase,
    textField: TextField,
    trustBar: TrustBar,
};

export const DynamicPage: React.FC<DynamicPageProps> = ({ sections }) => {
    const generateComponent = (component: ComponentProps) => {
        const {
            key: componentKey,
            type: ComponentType,
            props: componentProps,
        } = component;

        const ChildComponent = COMPONENTS[ComponentType as ComponentType];

        if (!ChildComponent) {
            console.warn(`Unknown component type: ${ComponentType}`);
            return null;
        }

        return <ChildComponent key={componentKey} {...componentProps} />;
    };

    const generateSection = (section: SectionProps) => {
        const {
            key: sectionKey,
            type: LayoutType,
            props: layoutProps,
            components,
        } = section;

        const LayoutComponent = LAYOUTS[LayoutType as LayoutType];

        if (!LayoutComponent) {
            console.warn(`Unknown layout type: ${LayoutType}`);
            return null;
        }

        return (
            <LayoutComponent key={sectionKey} {...layoutProps}>
                {components.map((component) => generateComponent(component))}
            </LayoutComponent>
        );
    };

    const renderedSections = useMemo(
        () => sections.map((section) => generateSection(section)),
        []
    );

    return <div>{renderedSections}</div>;
};

export default DynamicPage;
