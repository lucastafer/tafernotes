import React, { Fragment } from 'react';
import { Column, Section, Title, Container, Card, Button } from "rbx";
import "../../../styles/users.scss";
import UserEditHeader from "../../../components/user_edit_header";
import UsersEditForm from "../../../components/users/user_edit_form";
import UsersEditPasswordForm from "../../../components/users/user_edit_password_form";
import UsersDelete from "../../../components/users/user_delete";

const UserEditScreen = () => (
  <Fragment>
    <UserEditHeader />
    <Section size="medium" className="users">
      <Container>
        <Column.Group centered className="users-edit">
          <Column size={4}>
            <Title size={5} className="has-text-white has-text-left">
              Personal information
            </Title>
            <Card>
              <Card.Content>
                <UsersEditForm/>
              </Card.Content>
            </Card>
          </Column>
        </Column.Group>

        <Column.Group centered className="users-edit">
          <Column size={4}>
            <Title size={5} className="has-text-white has-text-left">
              Password
            </Title>
            <Card>
              <Card.Content>
                <UsersEditPasswordForm/>
              </Card.Content>
            </Card>
          </Column>
        </Column.Group>
        <Column.Group centered>
          <Column size={4} className="has-text-right">
            <UsersDelete/>
          </Column>
        </Column.Group>
      </Container>
    </Section>
  </Fragment>
);

export default UserEditScreen;