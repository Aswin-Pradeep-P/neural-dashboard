import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Grid2 } from '@mui/material';

import Button from '../../components/button/button';

import styles from './library.module.scss';
interface FileData {
  name: string;
  subject: string;
  uploadedBy: string;
  uploadedAt: string;
}

const uploads: FileData[] = [
  { name: 'file1.pdf', subject: 'Math', uploadedBy: 'Alice', uploadedAt: '2023-01-01 10:00' },
  { name: 'file2.docx', subject: 'Science', uploadedBy: 'Bob', uploadedAt: '2023-01-02 11:00' },
  { name: 'file3.ppt', subject: 'History', uploadedBy: 'Charlie', uploadedAt: '2023-01-03 12:00' },
  { name: 'file1.pdf', subject: 'Math', uploadedBy: 'Alice', uploadedAt: '2023-01-01 10:00' },
  { name: 'file2.docx', subject: 'Science', uploadedBy: 'Bob', uploadedAt: '2023-01-02 11:00' },
  { name: 'file3.ppt', subject: 'History', uploadedBy: 'Charlie', uploadedAt: '2023-01-03 12:00' },
  { name: 'file1.pdf', subject: 'Math', uploadedBy: 'Alice', uploadedAt: '2023-01-01 10:00' },
  { name: 'file2.docx', subject: 'Science', uploadedBy: 'Bob', uploadedAt: '2023-01-02 11:00' },
  { name: 'file3.ppt', subject: 'History', uploadedBy: 'Charlie', uploadedAt: '2023-01-03 12:00' },
  { name: 'file1.pdf', subject: 'Math', uploadedBy: 'Alice', uploadedAt: '2023-01-01 10:00' },
  { name: 'file2.docx', subject: 'Science', uploadedBy: 'Bob', uploadedAt: '2023-01-02 11:00' },
  { name: 'file3.ppt', subject: 'History', uploadedBy: 'Charlie', uploadedAt: '2023-01-03 12:00' },
];

const Library: React.FC = () => {
  const [files, setFiles] = useState<FileData[]>(uploads);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map((file) => ({
      name: file.name,
      subject: 'Unknown', // You can modify this to get actual subject
      uploadedBy: 'User', // You can modify this to get actual uploader
      uploadedAt: new Date().toLocaleString(),
    }));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    // Upload to backend
  }, []);

  const { getRootProps, getInputProps, open } = useDropzone({ onDrop });

  return (
    <Box padding={4} className={styles.libraryWrapper}>
      <Grid2 justifyContent="space-between" alignItems="center" marginBottom="0" container={true}>
        <h1>Library</h1>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <Button label="Upload to library" onClick={open} />
        </div>
      </Grid2>
      <TableContainer component={Paper} style={{ marginTop: '20px', borderRadius: '12px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Uploaded By</TableCell>
              <TableCell>Uploaded At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {files.map((file, index) => (
              <TableRow key={index} style={index % 2 === 0 ? { backgroundColor: 'rgba(211, 238, 227, 0.5)' } : {}}>
                <TableCell>{file.name}</TableCell>
                <TableCell>{file.subject}</TableCell>
                <TableCell>{file.uploadedBy}</TableCell>
                <TableCell>{file.uploadedAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Library;
