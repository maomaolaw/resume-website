import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaServer, FaDatabase } from 'react-icons/fa';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
  min-height: 100vh;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
  padding: 3rem 0;
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
`;

const Name = styled(motion.h1)`
  font-size: 3.5rem;
  background: linear-gradient(120deg, #2d3436, #0984e3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  font-weight: 800;
`;

const Title = styled(motion.h2)`
  font-size: 1.8rem;
  color: #2d3436;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1.5rem;
`;

const SocialIcon = styled(motion.a)`
  color: #2d3436;
  font-size: 1.8rem;
  transition: all 0.3s ease;
  padding: 0.8rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);

  &:hover {
    color: #0984e3;
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.4);
  }
`;

const Section = styled(motion.section)`
  margin-bottom: 3rem;
  padding: 2rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  background: linear-gradient(120deg, #0984e3, #00cec9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #0984e3;
`;

const ExperienceItem = styled(motion.div)`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #f6f9fc 0%, #f1f4f8 100%);
  border-radius: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }
`;

const ExperienceTitle = styled.h4`
  font-size: 1.4rem;
  color: #2d3436;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const ExperienceDate = styled.p`
  color: #636e72;
  font-size: 1rem;
  margin-bottom: 0.8rem;
  font-style: italic;
`;

const ExperienceDescription = styled.p`
  color: #2d3436;
  line-height: 1.8;
  font-size: 1.1rem;
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
`;

const Skill = styled(motion.div)`
  background: linear-gradient(120deg, #0984e3, #00cec9);
  color: white;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 500;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    font-size: 1.2rem;
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(120deg, #0984e3, #00cec9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: #636e72;
`;

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <HomeContainer>
      <Header>
        <Name
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          牧羊人
        </Name>
        <Title
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          全栈开发工程师
        </Title>
        <SocialLinks>
          <SocialIcon
            href="https://github.com"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
          </SocialIcon>
          <SocialIcon
            href="https://linkedin.com"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon
            href="mailto:example@email.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope />
          </SocialIcon>
        </SocialLinks>
      </Header>

      <StatsContainer>
        <StatItem
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <StatNumber>5+</StatNumber>
          <StatLabel>年开发经验</StatLabel>
        </StatItem>
        <StatItem
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <StatNumber>50+</StatNumber>
          <StatLabel>项目经验</StatLabel>
        </StatItem>
        <StatItem
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <StatNumber>100%</StatNumber>
          <StatLabel>客户满意度</StatLabel>
        </StatItem>
      </StatsContainer>

      <Section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <SectionTitle>关于我</SectionTitle>
        <motion.p variants={itemVariants}>
          我是一名充满热情的全栈开发工程师，拥有5年的开发经验。
          专注于构建高性能、可扩展的Web应用程序。
          热爱学习新技术，善于解决复杂问题。
          在过去的项目中，我成功带领团队完成了多个重要项目，
          并在性能优化和用户体验方面取得了显著成果。
        </motion.p>
      </Section>

      <Section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <SectionTitle>工作经验</SectionTitle>
        <ExperienceItem variants={itemVariants}>
          <ExperienceTitle>高级开发工程师 - ABC科技有限公司</ExperienceTitle>
          <ExperienceDate>2020年 - 至今</ExperienceDate>
          <ExperienceDescription>
            • 负责公司核心产品的架构设计和开发
            • 带领5人开发团队，提高团队开发效率30%
            • 优化系统性能，使页面加载速度提升50%
            • 引入新技术栈，提升开发效率和代码质量
          </ExperienceDescription>
        </ExperienceItem>
        <ExperienceItem variants={itemVariants}>
          <ExperienceTitle>全栈开发工程师 - XYZ互联网公司</ExperienceTitle>
          <ExperienceDate>2018年 - 2020年</ExperienceDate>
          <ExperienceDescription>
            • 参与电商平台的前后端开发
            • 实现复杂的业务逻辑和数据处理
            • 优化数据库查询性能
            • 开发自动化测试脚本
          </ExperienceDescription>
        </ExperienceItem>
      </Section>

      <Section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <SectionTitle>技能</SectionTitle>
        <SkillsContainer>
          <Skill
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCode /> React
          </Skill>
          <Skill
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaServer /> Node.js
          </Skill>
          <Skill
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCode /> TypeScript
          </Skill>
          <Skill
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCode /> Python
          </Skill>
          <Skill
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaServer /> Docker
          </Skill>
          <Skill
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaServer /> AWS
          </Skill>
          <Skill
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDatabase /> MongoDB
          </Skill>
          <Skill
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCode /> Git
          </Skill>
        </SkillsContainer>
      </Section>
    </HomeContainer>
  );
};

export default Home; 