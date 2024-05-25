import React from 'react';
import {
  BlogTitle,
  BlogWrapper,
  Card,
  CardWrapper,
  DateBox,
  ScrollBox,
  TextBlog,
} from './mainStyled';
import { formattedDate } from './formatDate';

const Blog = () => {
  return (
    <BlogWrapper>
      <BlogTitle>blog</BlogTitle>
      <CardWrapper>
        <ScrollBox>
          <Card>
            <TextBlog>
              Payment methods: Skrill, Neteller, webmoney, Bank transfer
            </TextBlog>
            <DateBox>{formattedDate}</DateBox>
          </Card>{' '}
          <Card>
            <TextBlog>
              Payment methods: Skrill, Neteller, webmoney, Bank transfer
            </TextBlog>
            <DateBox>{formattedDate}</DateBox>
          </Card>{' '}
          <Card>
            <TextBlog>
              Payment methods: Skrill, Neteller, webmoney, Bank transfer
            </TextBlog>
            <DateBox>{formattedDate}</DateBox>
          </Card>{' '}
          <Card>
            <TextBlog>
              Payment methods: Skrill, Neteller, webmoney, Bank transfer
            </TextBlog>
            <DateBox>{formattedDate}</DateBox>
          </Card>
        </ScrollBox>
      </CardWrapper>
    </BlogWrapper>
  );
};

export default Blog;
