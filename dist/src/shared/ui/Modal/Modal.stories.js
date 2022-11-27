var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';
export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(Modal, __assign({}, args)); };
export var Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cumque doloribus, id laboriosam neque perferendis, quas rerum sed soluta suscipit, ut velit voluptatem voluptatibus? Adipisci assumenda earum, explicabo id laboriosam porro recusandae rem sequi tenetur. Aspernatur blanditiis consequatur consequuntur culpa doloremque ducimus eius enim error, esse est ex, explicabo facilis fuga harum itaque minima molestiae numquam odio officiis perspiciatis placeat provident quae quas quasi quisquam quo quod recusandae rem, similique sit sunt voluptatem voluptates voluptatum! Aliquid amet cumque debitis doloribus earum est, fugiat fugit incidunt ipsam ipsum iste, labore laboriosam odio placeat quos reprehenderit repudiandae saepe similique temporibus, tenetur vero!\n',
};
export var Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cumque doloribus, id laboriosam neque perferendis, quas rerum sed soluta suscipit, ut velit voluptatem voluptatibus? Adipisci assumenda earum, explicabo id laboriosam porro recusandae rem sequi tenetur. Aspernatur blanditiis consequatur consequuntur culpa doloremque ducimus eius enim error, esse est ex, explicabo facilis fuga harum itaque minima molestiae numquam odio officiis perspiciatis placeat provident quae quas quasi quisquam quo quod recusandae rem, similique sit sunt voluptatem voluptates voluptatum! Aliquid amet cumque debitis doloribus earum est, fugiat fugit incidunt ipsam ipsum iste, labore laboriosam odio placeat quos reprehenderit repudiandae saepe similique temporibus, tenetur vero!\n',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
